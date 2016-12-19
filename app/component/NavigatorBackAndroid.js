/**
 * Created by Administrator on 2016/12/14 0014.
 */
"use strict"
export function NavigatorBack(navigator) {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    } else {
        return false;
    }
}