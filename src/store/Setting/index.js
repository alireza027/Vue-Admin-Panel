const Setting = {
    state: {

        palletes: [
            { id: 1, primaryBackground: "red", primaryColor: "white--text", secondaryBackground: "amber darken-1", secondaryColor: "white--text", primaryDarkBackground: "red darken-3", primaryDarkColor: "white--text", secondaryDarkBackground: "amber darken-2", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "قرمز", iconColor: "white" },
            { id: 2, primaryBackground: "pink lighten-1", primaryColor: "white--text", secondaryBackground: "deep-purple accent-2", secondaryColor: "white--text", primaryDarkBackground: "pink lighten-1", primaryDarkColor: "white--text", secondaryDarkBackground: "red", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "صورتی", iconColor: "white" },
            { id: 3, primaryBackground: "purple darken-1", primaryColor: "white--text", secondaryBackground: "amber darken-1", secondaryColor: "white--text", primaryDarkBackground: "purple darken-1", primaryDarkColor: "white--text", secondaryDarkBackground: "amber darken-1", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "بنفش", iconColor: "yellow darken-1" },
            { id: 4, primaryBackground: "deep-purple accent-4", primaryColor: "white--text", secondaryBackground: "amber", secondaryColor: "white--text", primaryDarkBackground: "deep-purple accent-4", primaryDarkColor: "white--text", secondaryDarkBackground: "amber", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "بنفش تیره", iconColor: "yellow darken-1" },
            { id: 5, primaryBackground: "indigo darken-3", primaryColor: "white--text", secondaryBackground: "amber", secondaryColor: "white--text", primaryDarkBackground: "indigo darken-3", primaryDarkColor: "white--text", secondaryDarkBackground: "amber", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "آبی تیره", iconColor: "yellow darken-2" },
            { id: 6, primaryBackground: "blue accent-2", primaryColor: "white--text", secondaryBackground: "amber darken-1", secondaryColor: "white--text", primaryDarkBackground: "blue accent-2", primaryDarkColor: "white--text", secondaryDarkBackground: "amber darken-1", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "آبی", iconColor: "white" },
            { id: 7, primaryBackground: "light-blue accent-3", primaryColor: "white--text", secondaryBackground: "amber darken-1", secondaryColor: "white--text", primaryDarkBackground: "light-blue accent-3", primaryDarkColor: "white--text", secondaryDarkBackground: "amber darken-1", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "آبی روشن", iconColor: "white" },
            { id: 8, primaryBackground: "cyan darken-3", primaryColor: "white--text", secondaryBackground: "amber darken-1", secondaryColor: "white--text", primaryDarkBackground: "cyan darken-3", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "فیروزه ای تیره", iconColor: "white" },
            { id: 9, primaryBackground: "teal lighten-2", primaryColor: "white--text", secondaryBackground: "yellow darken-2", secondaryColor: "white--text", primaryDarkBackground: "teal lighten-2", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "سبر دودی", iconColor: "white" },
            { id: 10, primaryBackground: "green darken-1", primaryColor: "white--text", secondaryBackground: "yellow darken-2", secondaryColor: "white--text", primaryDarkBackground: "green darken-1", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "سبز", iconColor: "white" },
            { id: 11, primaryBackground: "light-green darken-3", primaryColor: "white--text", secondaryBackground: "yellow darken-2", secondaryColor: "white--text", primaryDarkBackground: "light-green darken-3", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "سبز تیره", iconColor: "white" },
            { id: 12, primaryBackground: "yellow darken-2", primaryColor: "white--text", secondaryBackground: "deep-purple accent4", secondaryColor: "white--text", primaryDarkBackground: "yellow darken-2", primaryDarkColor: "white--text", secondaryDarkBackground: "purple accent-4", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "زرد", iconColor: "deep-purple accent-4" },
            { id: 13, primaryBackground: "amber darken-3", primaryColor: "white--text", secondaryBackground: "indigo darken-2", secondaryColor: "white--text", primaryDarkBackground: "amber darken-3", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "کهربایی تیره", iconColor: "white" },
            { id: 14, primaryBackground: "orange darken-3", primaryColor: "white--text", secondaryBackground: "indigo darken-2", secondaryColor: "white--text", primaryDarkBackground: "orange darken-3", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "نارنجی", iconColor: "white" },
            { id: 15, primaryBackground: "deep-orange accent-2", primaryColor: "white--text", secondaryBackground: "amber", secondaryColor: "white--text", primaryDarkBackground: "deep-orange accent-2", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "گلبهی", iconColor: "white" },
            { id: 16, primaryBackground: "blue-grey darken-4", primaryColor: "white--text", secondaryBackground: "amber", secondaryColor: "white--text", primaryDarkBackground: "blue-grey darken-4", primaryDarkColor: "white--text", secondaryDarkBackground: "yellow", secondaryDarkColor: "white--text", otherColor: "grey darken-2", tooltipText: "خاکستری", iconColor: "amber" },
        ],

        transitionList: [
            { id: 1, name: "Fade", content: "fade" },
            { id: 2, name: "Zoom", content: "zoom" },
            { id: 3, name: "Left", content: "backInLeft" },
            { id: 4, name: "Right", content: "backInRight" },
            { id: 5, name: "Bounce", content: "bounceIn" },
            { id: 6, name: "Flip", content: "flip" },
        ],

        directionAndMode: JSON.parse(window.localStorage.getItem("direction-and-mode")),
        headerAndSidebar: JSON.parse(window.localStorage.getItem("header-and-sidebar")),
        contentStyle: JSON.parse(window.localStorage.getItem("content-style")),

    },

    mutations: {

        // change night or light mode
        changeMode(state, mode) {
            state.directionAndMode = { direction: state.directionAndMode.direction, mode: mode };
            window.localStorage.setItem('direction-and-mode', JSON.stringify({ direction: state.directionAndMode.direction, mode: mode }))
        },

        // change rtl or ltr
        changeDirection(state, direction) {
            state.directionAndMode = { direction: direction, mode: state.directionAndMode.mode };
            window.localStorage.setItem('direction-and-mode', JSON.stringify({ direction: direction, mode: state.directionAndMode.mode }))
        },


        // change header and sidebar switch , modelName, modelStatus
        changeHeaderSidebarSwitch(state, payload) {
            state.headerAndSidebar[payload.payload.modelName] = payload.payload.modelStatus;
            window.localStorage.setItem('header-and-sidebar', JSON.stringify(state.headerAndSidebar));
        },


        // change header and sidebar height
        changeHeaderSidebarHeight(state, height) {
            state.headerAndSidebar.heightHeaderSidebar = height;
            window.localStorage.setItem('header-and-sidebar', JSON.stringify(state.headerAndSidebar));
        },


        // change header and sidebar background and color state,payload
        // payload => primaryBackground - primaryColor - secondaryBackground - secondaryColor - primaryDarkBackground - primaryDarkColor - secondaryDarkBackground - secondaryDarkColor - otherColor
        changeHeaderSidebarColor(state, payload) {
            state.headerAndSidebar.primaryBackground = payload.payload.primaryBackground;
            state.headerAndSidebar.primaryColor = payload.payload.primaryColor;
            state.headerAndSidebar.secondaryBackground = payload.payload.secondaryBackground;
            state.headerAndSidebar.secondaryColor = payload.payload.secondaryColor;
            state.headerAndSidebar.primaryDarkBackground = payload.payload.primaryDarkBackground;
            state.headerAndSidebar.primaryDarkColor = payload.payload.primaryDarkColor;
            state.headerAndSidebar.secondaryDarkBackground = payload.payload.secondaryDarkBackground;
            state.headerAndSidebar.secondaryDarkColor = payload.payload.secondaryDarkColor;
            state.headerAndSidebar.otherColor = payload.payload.otherColor;
            state.headerAndSidebar.iconColor = payload.payload.iconColor;
            window.localStorage.setItem('header-and-sidebar', JSON.stringify(state.headerAndSidebar));
        },


        // change content style switch
        changeContentSwitch(state, payload) {
            state.contentStyle[payload.payload.modelName] = payload.payload.modelStatus;
            window.localStorage.setItem("content-style", JSON.stringify(state.contentStyle));
        },

        // change content style transition
        changeContentTransition(state, transitionName) {
            state.contentStyle.transition = transitionName;
            window.localStorage.setItem("content-style", JSON.stringify(state.contentStyle));
        }



    }
}
export default Setting;