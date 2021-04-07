const Header = {
    state: {
        document: [
            { id: 1, icon: "mdi-language-javascript", href: "/", title: "جاوا اسکریپت" },
            { id: 2, icon: "mdi-vuejs", href: "/", title: "ویو جی اس" },
            { id: 3, icon: "mdi-vuetify", href: "/", title: "ویوتیفای" }
        ],
        user: [
            { id: 1, icon: "mdi-connection", href: "/", title: "اتصالات" },
            { id: 2, icon: "mdi-information", href: "/", title: "داده ها" },
            { id: 3, icon: "mdi-logout", href: "/", title: "خروج" }
        ],

        // open or close navigation drawer
        sidebarMenu: false,
        settingDrawer: false
    },
    getters: {
        settingToggle: (state) => {
            state.settingDrawer = !state.settingDrawer
        }
    },
    mutations: {
        toggleMenu(state) {
            state.sidebarMenu = !state.sidebarMenu
        },
        settingDrawerToggle(state) {
            state.settingDrawer = !state.settingDrawer
        },
        clickToDrawer(state) {
            state.settingDrawer = false;
        }
    }
}
export default Header;