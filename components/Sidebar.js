export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col">
            <div>Logo</div>
            <nav>
                <SidebarLink text={"Home"} />
                <SidebarLink text={"Explore"} />
                <SidebarLink text={"Notifications"} />
                <SidebarLink text={"Messages"} />
            </nav>
            <div>User</div>
        </div>
    )
}

function SidebarLink({ text, icon }) {
    return (
        <li>
            {text}
        </li>
    )
}