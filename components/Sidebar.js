import {
    HomeIcon,
    HashtagIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    BellIcon,
    UserIcon,
    DotsCircleHorizontalIcon
} from '@heroicons/react/outline';
import Image from 'next/image';


export default function Sidebar() {
    return (
        <div className="h-full hidden sm:flex flex-col fixed xl:ml-24 font-Zelda"> {/*add hidden later in the beginning of function */}
            <nav className="h-full relative xl:space-y-1.5">
                <div className="flex justify-center item-center xl:justify-start py-3 xl:p-3">
                    <Image src={'/assets/cucco2.png'} width={34} height={34} />
                </div>
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={HashtagIcon} text={"Explore"} />
                <SidebarLink Icon={BellIcon} text={"Notifications"} />
                <SidebarLink Icon={InboxIcon} text={"Messages"} />
                <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
                <SidebarLink Icon={UserIcon} text={"Profile"} />
                <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
                <button className="hidden xl:inline bg-[#fa5044]
                rounded-full h-[52px] mt-2 w-[200px] text-lg" >Write</button>
                <div className="absolute bottom-0 font-Quest">User</div>
            </nav>

        </div>
    )
}

function SidebarLink({ text, Icon }) {
    return (
        <li className="hoverAnimation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
            <Icon className="h-7" />
            <span className="hidden xl:inline">{text}</span>
        </li>
    )
}