
export function MsgBox({type, children}: {type: string, children: React.ReactNode}) {
    const c_icons = ["⨻", "🤷‍♂️", "👷‍♂️"];
    const c_title_icons = ["err", "inf", "build"];
    const c_index_of_type = c_title_icons.indexOf(type);
    const c_selected_icon = c_icons[c_index_of_type];
    const c_css_class_name = `msgb-default msgb-${c_title_icons[c_index_of_type]}`
    return (
        <div className={c_css_class_name}>
            <h1>{c_selected_icon}</h1>{children} <br />
        </div>
    )
}