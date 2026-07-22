const YEAR = new Date().getFullYear()

const BANNER = `
%c
██████╗ ██╗   ██╗███╗   ███╗██████╗ ██╗     ███████╗
██╔══██╗██║   ██║████╗ ████║██╔══██╗██║     ██╔════╝
██████╔╝██║   ██║██╔████╔██║██████╔╝██║     █████╗  
██╔══██╗██║   ██║██║╚██╔╝██║██╔══██╗██║     ██╔══╝  
██████╔╝╚██████╔╝██║ ╚═╝ ██║██████╔╝███████╗███████╗
╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚══════╝╚══════╝
 ██████╗██████╗  █████╗ ███████╗████████╗
██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝
██║     ██████╔╝███████║█████╗     ██║   
██║     ██╔══██╗██╔══██║██╔══╝     ██║   
╚██████╗██║  ██║██║  ██║██║        ██║   
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝   
`

export function printCopyrightNotice() {
  console.log(
    BANNER,
    'color: #f0b429; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; line-height: 1.15;',
  )

  console.log(
    '%c© %s Bali0531 — All rights reserved.',
    'color: #f6efdf; background: #1a160f; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; font-weight: 700; padding: 8px 12px; border-left: 3px solid #f0b429;',
    String(YEAR),
  )

  console.log(
    '%cBuilt for BumbleCraft · play.bumblecraft.hu · Unauthorized cloning is not beesiness.',
    'color: #b9ad93; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; padding: 4px 0 10px;',
  )

  console.log(
    '%c🐝  Hands off the honeycomb.',
    'color: #f0b429; font-weight: 700; font-size: 12px;',
  )
}
