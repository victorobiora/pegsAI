
import NotificationIcon from '@/public/assets/images/general/notification-icon-2.svg'
import MessageIcon from '@/public/assets/images/general/notification-icon.svg'
import greyMessageIcon from '@/public/assets/images/general/grey-message-icon.svg'
import greyBookmarksIcon from '@/public/assets/images/general/grey-bookmarks-icon.svg'
import greyQuestionMarkIcon from '@/public/assets/images/general/grey-question-mark-icon.svg'
import greyCardIcon from '@/public/assets/images/general/grey-card-icon.svg'
import whiteAccountIcon from '@/public/assets/images/general/white-profile-icon.svg'
import greyAccountIcon from '@/public/assets/images/general/grey-profile-icon.svg'
import genericAvatar from "@/public/assets/images/general/generic-avatar.svg";


export const navigationIcons = [
	{
		Icon: MessageIcon,
		alt: "Message Icon",
	},
	{
		Icon: NotificationIcon,
		alt: "Notification Icon",
	},
	{
		Icon: genericAvatar,
		alt: "Profile_Pic Icon",
	},
];


export const userSidebarFields = [

	{
		Icon: {
			active: whiteAccountIcon,
			inactive: greyAccountIcon,
		},
		text: "My Account",
		route: "account",
	},
	{
		Icon: {
			active: greyBookmarksIcon,
			inactive: greyBookmarksIcon,
		},
		text: "Saved Listings",
		route: "saved-listings",
	},
	{
		Icon: {
			active: greyCardIcon,
			inactive: greyCardIcon,
		},
		text: "My Orders",
		route: "orders",
	},
	{
		Icon: {
			active: greyMessageIcon,
			inactive: greyMessageIcon,
		},
		text: "Inquiries & Messages",
		route: "inquiries-and-messages",
	},
	{
		Icon: {
			active: greyQuestionMarkIcon,
			inactive: greyQuestionMarkIcon,
		},
		text: "Help & Support",
		route: "help-and-support",
	},
	
];