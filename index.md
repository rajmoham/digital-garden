```
 __        __   _                            _                           
 \ \      / /__| | ___ ___  _ __ ___   ___  | |_ ___    _ __ ___  _   _  
  \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \ | __/ _ \  | '_ ` _ \| | | | 
   \ V  V /  __/ | (_| (_) | | | | | |  __/ | || (_) | | | | | | | |_| | 
  __\_/\_/ \___|_|\___\___/|_| |_|_|_|\___|  \__\___/  |_| |_| |_|\__, | 
 |  _ \(_) __ _(_) |_ __ _| |  / ___| __ _ _ __ __| | ___ _ __    |___/  
 | | | | |/ _` | | __/ _` | | | |  _ / _` | '__/ _` |/ _ \ '_ \          
 | |_| | | (_| | | || (_| | | | |_| | (_| | | | (_| |  __/ | | |         
 |____/|_|\__, |_|\__\__,_|_|  \____|\__,_|_|  \__,_|\___|_| |_|         
          |___/                                                          
```

I make notes on various computer science topics for my own personal learning and development. My aim is to build a strong foundation across many areas within this area of study, and easily reference them in the future. 
### What is Quartz?
> "Quartz is a fast, batteries-included static-site generator that transforms Markdown content into fully functional websites. Thousands of students, developers, and teachers are [already using Quartz](https://quartz.jzhao.xyz/showcase) to publish personal notes, websites, and [digital gardens](https://jzhao.xyz/posts/networked-thought) to the web."

In short, it allows me to convert my notes taken in [Obsidian](https://obsidian.md/) into static web pages to view on any device with an internet connection. 
### My forked workflow
My digital garden is a fork of Quartz but customised to be automated and minimal.
- I have a separate repo which contains purely all my notes, this prevents having to sync the entire digital garden source code every time.
- So how do my notes get updated? Occasionally, my digital garden checks for new notes, if it ends up finding any, it rebuilds and deploys this automatically.
