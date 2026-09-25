
export function MsgBox({type, children}: {type: string, children: React.ReactNode}) {
    const icons = ["⨻", "🤷‍♂️", "👷‍♂️"];
    const titleIcons = ["err", "inf", "build"];
    const iid = titleIcons.indexOf(type);
    const selectedIcon = icons[iid];
    const classNameMsgb = `msgb-default msgb-${titleIcons[iid]}`
    return (
        <div className={classNameMsgb}>
            <h1>{selectedIcon}</h1>{children} <br />
        </div>
    )
}