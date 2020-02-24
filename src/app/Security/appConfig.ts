const getBaseUrl = () => {
    var _baseUrl = 'localhost';


    return _baseUrl;
}

const getAppBaseUrl = () => {

}

const getApiUrl = () => {

}

export const appConfig = {
    appMode: getBaseUrl() == "portal" ? "Production" : getBaseUrl() == "localhost" ? "developement" : 'qa',
    enV: function (config) {
        if (appConfig.appMode === "developement") {
            return appConfig.developement[config]
        }
        else if (appConfig.appMode === "Production") {

            return appConfig.Production[config]
        }
        else {
            return appConfig.Testing[config]
        }
    },
    developement: {
        deviceType: 'desktop',
        url: "https://localhost:44368",
        userId: '12345',
        token: '',
        connectionId: ''
    },
    Production: {
        deviceType: 'desktop',
        url: "https://portal.avadheshkumar.in",
        userId: '12345',
        token: '',
        connectionId: ''
    },
    Testing: {
        deviceType: 'desktop',
        url: "https://qa.portal.avadheshkumar.in",
        userId: '12345',
        token: '',
        connectionId: ''
    }
}
