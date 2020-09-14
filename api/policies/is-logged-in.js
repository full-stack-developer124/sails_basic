/**
 * is-logged-in
 *
 * A simple policy that allows any request from an authenticated user.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
module.exports = async function (req, res, proceed) {

  // If `req.me` is set, then we know that this request originated
  // from a logged-in user.  So we can safely proceed to the next policy--
  // or, if this is the last policy, the relevant action.
  // > For more about where `req.me` comes from, check out this app's
  // > custom hook (`api/hooks/custom/index.js`).

  if (req.me) {
    return proceed();
  } else if (req.originalUrl.includes("/fetchWorkoutByTrainerId") || req.originalUrl.includes("/fetchTrainerById") || req.originalUrl == "/home" || req.originalUrl == "/addWorkoutPlanToDB" || req.originalUrl == "/addWorkout" || req.originalUrl == "/exercises" || req.originalUrl == "/fetchExercises"  || req.originalUrl == "/configureExercise" || req.originalUrl == "/fetchTrainerById" || req.originalUrl == "/addWorkoutPlan" || req.originalUrl == "/addWorkoutToDB" || req.originalUrl == "/configureWeek" || req.originalUrl == "/workoutsByTrainer") {
    return proceed()
  } else {
    console.log("URL: " + req.originalUrl);
  }

  //--•
  // Otherwise, this request did not come from a logged-in user.

  return res.unauthorized();

};
