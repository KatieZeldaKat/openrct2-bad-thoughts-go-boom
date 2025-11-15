# Bad Thoughts Go BOOM!

It is the Year 1, and guests have been enslaved by a higher being who forces them to visit amusement parks for eternity. It is an age of mandatory fun.

As such, all guests _must_ have fun, both physically and mentally. And if a guest has a single bad thought? The TNT implanted into them by their captors will automatically go off, creating a firey explosion that leaves nothing behind.

_Idea for plugin provided by [Marcel Vos](https://www.youtube.com/@MarcelVos)_.

## Getting the plugin

Download the `.js` file from the [latest release](https://github.com/KatieZeldaKat/openrct2-bad-thoughts-go-boom/releases/latest) and place it in the "plugin" folder. This can be found by opening OpenRCT2 and selecting "Open custom content folder" under the toolbox in the main menu.

## Known limitations

- Guests only explode when walking around the park or sitting.
    - Caused by [OpenRCT2 #7265](https://github.com/OpenRCT2/OpenRCT2/pull/7265). The PR mentions that other states than walking and sitting can be added if deemed "safe," though nothing has been implemented since.
- It can take quite a while after setting a guest to explode for them to actually do so, and when guests do eventually explode, it's often all at once in a large wave of fire.

## Potential future additions

- Option to disable the plugin in-game
- Change frequency at which guests are queried for their thoughts
- Make exploded guests affect the park rating (and option for how much)
- Ability for players to set what counts as a bad thought
- A dashboard to track the frequency of bad thoughts
