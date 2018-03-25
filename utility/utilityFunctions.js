let UtilityFunction={};
module.exports = UtilityFunction;
module.exports.applyConstraintOnQuery = function(
  query,
  constraint,
  s_attr,
  value
) {
  //console.log("Applying constraint on values ...");
  switch (constraint) {
    case "equal":
      query = query.where(s_attr, value);
      break;
    case "not-equal":
      query = query.where(s_attr).ne(value);
      break;
    case "greater-than":
      query = query.where(s_attr).gt(value);
      break;
    case "greater-than-equal":
      query = query.where(s_attr).gte(value);
      break;
    case "less-than":
      query = query.where(s_attr).lt(value);
      break;
    case "less-than-equal":
      query = query.where(s_attr).lte(value);
      break;
    case "in-array":
      query = query.where(s_attr).in(value);
      break;
    case "not-in-array":
      query = query.where(s_attr).nin(value);
      break;
    case "regex":
      try {
        query = query.where(s_attr).regex(new RegExp(value));
      } catch (error) {
        console.error("Regular Expression Not correct Error ::");
        console.error(error);
      }
      break;
    default:
      break;
  }
  return query;
};


module.exports.checkForUserBasedSession = function(request, routeStructure, userSession) {
  let requestSession = request.session;
  //console.log("Inside check for user based session ..");      
  if ( 
      ( request && request != null) &&
      (userSession != null && userSession) 
     ) {
      //console.log("Request not null as well userSession");
      let keys = (routeStructure.userBasedSession.sessionAttribute);
      let numberOfConstraint = routeStructure.userBasedSession.sessionAttribute.length;
      let tempConstraint;
      for (let i = 0; i < numberOfConstraint; i++) {
          //console.log(keys[i]);
          tempConstraint = keys[i];
          //console.log(tempConstraint)
          if(tempConstraint && tempConstraint.replaceKey) {
            //console.log("session constraint object");
            if (
                userSession[tempConstraint.replaceWith] &&
                userSession[tempConstraint.replaceWith] != null
              ) {
                //console.log('All set replace text in request');                    
                if (request[tempConstraint.replaceKey]) {                  
                  //request = JSON.parse(JSON.stringify(request).replace('$__'+keys[i],userSession[keys[i]]));
                  request[tempConstraint.replaceKey] = userSession[tempConstraint.replaceWith];                                                                  
                } if(request.updateDoc && request.updateDoc[tempConstraint.replaceKey]) {
                  request.updateDoc[tempConstraint.replaceKey] = userSession[tempConstraint.replaceWith];
                } if(request.insertDoc && request.insertDoc[tempConstraint.replaceKey]) {
                  request.insertDoc[tempConstraint.replaceKey] = userSession[tempConstraint.replaceWith];
                } else {
                  request[tempConstraint.replaceKey] = userSession[tempConstraint.replaceWith];
                }
            } else {
              //console.log("Session is null")
              return false;
            }
          } else {
            //console.log("Error due to constraint new object");
            return false;
          }                          
      }
  } else {
    //console.log("User session or request is null ..");
    return false;
  }  
  return request;
}