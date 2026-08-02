
export function MsgBox({type, text}: {type: string, text: string}) {
    const icons = ["⨻", "🤷‍♂️", "👷‍♂️"];
    const titleIcons = ["err", "inf", "build"];
    const iid = titleIcons.indexOf(type);
    const selectedIcon = icons[iid];
    return (
        <div className="msgb-default msgb-warn">
            <h1>{selectedIcon}</h1>{text} <br />
        </div>
    )
}