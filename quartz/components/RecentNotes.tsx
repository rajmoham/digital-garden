import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/recentNotes.scss"
import { Date, getDate, formatDate } from "./Date"
import { GlobalConfiguration } from "../cfg"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

interface Options {
  title?: string
  limit: number
  linkToMore: SimpleSlug | false
  showTags: boolean
  filter: (f: QuartzPluginData) => boolean
  sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  limit: 5,
  linkToMore: false,
  showTags: false,
  filter: () => true,
  sort: byDateAndAlphabetical(cfg),
})

export default ((userOpts?: Partial<Options>) => {
  const RecentNotes: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles.filter(opts.filter).sort(opts.sort).slice(0, opts.limit)
    const remaining = Math.max(0, pages.length - opts.limit)
    const groupedByDate = pages.reduce<Record<string, any[]>>((map, page) => {
      const dateKey: string = formatDate((getDate(cfg, page)!), cfg.locale);
      if (!map[dateKey]) {
        map[dateKey] = [];
      }
      map[dateKey].push(page);
      return map;
    }, {});

    return (
      <div class={classNames(displayClass, "recent-notes")}>
        <h3>{opts.title ?? i18n(cfg.locale).components.recentNotes.title}</h3>
        <ul class="recent-ul">
        {Object.keys(groupedByDate).map((date) => {
            return (
                <>
                <p class="meta">
                    {date}
                    {/*<Date date={getDate(cfg, date)!} locale={cfg.locale} /> */}
                </p>
                {
                    groupedByDate[date].map((page) => {
                        const title = page.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
                        return (
                            <li class="recent-li">
                                <div class="section">
                                    <div class="desc">
                                        <a href={resolveRelative(fileData.slug!, page.slug!)}>
                                            {title}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
                </>
            )
        })}
        </ul>
        {opts.linkToMore && remaining > 0 && (
          <p>
            <a href={resolveRelative(fileData.slug!, opts.linkToMore)}>
              {i18n(cfg.locale).components.recentNotes.seeRemainingMore({ remaining })}
            </a>
          </p>
        )}
      </div>
    )
  }

  RecentNotes.css = style
  return RecentNotes
}) satisfies QuartzComponentConstructor
