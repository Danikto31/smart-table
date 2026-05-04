import {defaultRules, rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const stArr = new Array();
    const ctArr = new Array();
    stArr.push('skipEmptyTargetValues');
    ctArr.push(rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false));
    const compare = createComparison(stArr, ctArr);
    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(row => compare(row, state));
    }
}   