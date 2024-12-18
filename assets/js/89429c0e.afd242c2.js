"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[47053],{79815:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Discord/development/coders/chat_2024-11-07","title":"\ud83d\udcbb-coders 2024-11-07","description":"Summary","source":"@site/community/Discord/development/coders/chat_2024-11-07.md","sourceDirName":"Discord/development/coders","slug":"/Discord/development/coders/chat_2024-11-07","permalink":"/eliza/community/Discord/development/coders/chat_2024-11-07","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"\ud83d\udcbb-coders 2024-11-06","permalink":"/eliza/community/Discord/development/coders/chat_2024-11-06"},"next":{"title":"\ud83d\udcbb-coders 2024-11-08","permalink":"/eliza/community/Discord/development/coders/chat_2024-11-08"}}');var s=i(74848),o=i(28453);const r={},a="\ud83d\udcbb-coders 2024-11-07",c={},d=[{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:2},{value:"Who Helped Who",id:"who-helped-who",level:2},{value:"Action Items",id:"action-items",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-coders-2024-11-07",children:"\ud83d\udcbb-coders 2024-11-07"})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"In the chat, Ophiuchus installs npm packages for development purposes and initiates a build process. Jin expresses uncertainty but later appreciates DocuShards after learning about its PDF builds feature. HiroP encounters difficulties running a Discord bot due to conflicting token names in documentation. The team discusses the importance of integrating cursor support into their project, with SotoAlt and WAWE advocating for using code editors over switching operating systems like claude. They also address Playwright's compatibility issues on Arch Linux and suggest modifying shell scripts for better node expertise. Jin plans to implement 'code2prompt', a tool that uses grep -r to find strings, indicating an effort towards improving the project's codebase and debugging capabilities."}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Are DISCORD_API_TOKEN and DISCORD_TOKEN the same in the .env file?"}),"\n",(0,s.jsx)(n.li,{children:"Ophiuchus: The two tokens are not necessarily the same; one is for API usage, while the other might be specific to a bot's operation. It depends on how your application uses them."}),"\n",(0,s.jsxs)(n.li,{children:["How can I debug DocuShare issues and stream it for assistance?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Jin (19:18:46): You can try streaming your debugging process using tools like VS Code Live Share or screen sharing with colleagues to get real-time help."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Is there a way to make Playwright work on Arch Linux, given the error message about missing apt-get?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Coinwitch (ai16z intern) (20:18:28): You can try using alternative package managers like pacman or manually installing dependencies. However, since Arch Linux is not officially supported by Playwright, you might encounter issues that require workarounds."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"who-helped-who",children:"Who Helped Who"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ophiuchus helped Jin with setting up a PDF version for documentation by suggesting to use Docusaurus's pdf build feature once it is working. This implies guidance on improving documentation accessibility and format."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ophiuchus assisted HiroP in understanding the setup process for Discord bot integration by clarifying that both ",(0,s.jsx)(n.code,{children:"DISCORD_API_TOKEN"})," and ",(0,s.jsx)(n.code,{children:"DISCORD_TOKEN"})," are correct but serve different purposes, with one being used generally and the other specifically within character files. This helped resolve confusion regarding token usage in their project's configuration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SotoAlt | WAWE provided advice to Jin on improving Linux setup by suggesting that it should automatically detect the OS and use the default package manager accordingly. This recommendation aimed at streamlining the installation process for different operating systems, enhancing user experience."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"action-items",children:"Action Items"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Technical Tasks"}),"\n",(0,s.jsx)(n.li,{children:"Implement PDF version of documentation and website chat QA feature using Eliza agent runtime (mentioned by Ophiuchus)"}),"\n",(0,s.jsxs)(n.li,{children:["Documentation Needs","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a PDF version of the documentation (requested by Jin, supported by Ophiuchus)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Feature Requests","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add support for DISCORD_TOKEN in addition to DISCORD_API_TOKEN (mentioned by hiroP and discussed among others)"}),"\n",(0,s.jsx)(n.li,{children:"Improve Linux setup detection and package manager auto-selection (requested by Jin)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Community Tasks","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Debugging assistance for DocuSaurus (led by Jin, with community involvement from Ophiuchus, SotoAlt | WAWE, coinwitch, etc.)"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);