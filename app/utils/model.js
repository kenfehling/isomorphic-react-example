export function mutateField(object:Object, field:String, value, callback:Function) {
    if (value) {
        if (object[field] === value) {  // ignore if already this value
            callback ? callback({ success: false, error: null }) : null;
        }
        else {
            object[field] = value;
            callback ? callback({ success: true }) : null;
        }
    }
    else {
        const error = field + " mustn't be " + value;
        callback ? callback({ success: false, error: error }) : null;
    }
}