export default function(state = null , action){
  //console.log("hi");
  switch(action.type){
    case "BOOK_SELECTED":
    return action.payload;
  }
  return state;
}
