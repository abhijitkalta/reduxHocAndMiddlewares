export default function({dispatch}){
  return next => action => {
    //if action doesn't have payload, or the payload doesn't have a then property, dont care about it pass it to the next middleware
    if(!action.payload || !action.payload.then){
      //pass it to the next middleware
      return next(action);
    };

    action.payload
      .then((response) => {
        const newAction = {...action, payload: response};
        //start the cycle again from the topmost reducer
        dispatch(newAction);
      })
  }
}
