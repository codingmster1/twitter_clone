import { HomeIcon } from '@heroicons/react/outline';


export default function Sidebar() {
    return (
        <div className=" sm:flex flex-col fixed"> {/*add hidden later in the beginning of function */}
            <div>Logo</div>
            <nav>
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                {/* <SidebarLink text={"Explore"} />
                <SidebarLink text={"Notifications"} />
                <SidebarLink text={"Messages"} /> */}
            </nav>
            <div>User</div>
        </div>
    )
}

function SidebarLink({ text, Icon }) {
    return (
        <li className="flex mb-6 items-center text-xl">
            <Icon className="h-7" />
            <span className="hidden xl:inline">{text}</span>
        </li>
    )
}