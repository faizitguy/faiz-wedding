import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "Download Wedding card") => {
    const eventTracker = (action = "Downloaded Wedding Card", label = "Download Wedding Card") => {
        ReactGA.event({ category, action, label });
    }
    return eventTracker;
}
export default useAnalyticsEventTracker;