let UtilityFunction={};
module.exports = UtilityFunction;
module.exports.applyConstraintOnQuery = function(
  query,
  constraint,
  s_attr,
  value
) {
  console.log("Applying constraint on values ...");
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
