/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect', csrf: false },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome', csrf: false },

  'GET /faq':                { action:   'view-faq', csrf: false },
  'GET /legal/terms':        { action:   'legal/view-terms', csrf: false },
  'GET /legal/privacy':      { action:   'legal/view-privacy', csrf: false },
  'GET /contact':            { action:   'view-contact', csrf: false },

  'GET /signup':             { action: 'entrance/view-signup', csrf: false },
  'GET /email/confirm':      { action: 'entrance/confirm-email', csrf: false },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email', csrf: false },

  'GET /login':              { action: 'entrance/view-login', csrf: false },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password', csrf: false },
  'GET /password/new':       { action: 'entrance/view-new-password', csrf: false },

  'GET /account':            { action: 'account/view-account-overview', csrf: false },
  'GET /account/password':   { action: 'account/view-edit-password', csrf: false },
  'GET /account/profile':    { action: 'account/view-edit-profile', csrf: false },
  'GET /fetchWorkouts':      { action: 'workout/fetch-workouts', csrf: false },
  'GET /fetchTrainers':      { action: 'trainer/fetch-trainers', csrf: false },
  'GET /fetchUnitSystem':    { action: 'user/fetch-unit-system', csrf: false },
  'GET /fetchTips':          { action: 'tip/fetch-tips', csrf: false },
  'GET /fetchExercises':     { action: 'exercise/fetch-exercises', csrf: false },
  'GET /fetchCurrentUser':   { action: 'user/fetch-current-user', csrf: false },
  'GET /fetchPlans':         { action: 'plan/fetch-plans', csrf: false },
  'GET /fetchMyWorkouts':    { action: 'user/fetch-my-workouts', csrf: false },
  'GET /fetchUserData':      { action: 'user/fetch-user-workout-statistics', csrf: false },
  'GET /fetchUserWeekWorkouts': { action: 'user/fetch-users-weekday-workouts', csrf: false },
  'GET /fetchWorkoutById':   { action: 'workout/fetch-workout-by-id', csrf: false },
  'POST /updateUsersWeek':   { action: 'user/update-week', csrf: false },
  'GET /checkUserCompletedProfile': { action: 'user/fetch-user-profile-completed', csrf: false },
  'GET /fetchActivePromocodes': { action: 'promocodes/fetch-active-codes', csrf: false },
  'POST /updatePromocodeSubscriptions': { action: 'promocodes/update-promocode-subscription', csrf: false },
  'POST /updateUsersUnitSystem': { action: 'user/update-users-unit-system', csrf: false },
  'POST /updateUsersName': { action: 'user/update-users-name', csrf: false },
  'POST /updateUsersFocus': { action: 'user/update-users-focus', csrf: false },
  'POST /updateUsersWeightObservations': { action: 'user/update-users-weight-observations', csrf: false },
  'POST /completeUsersProfile': { action: 'user/complete-profile', csrf: false },
  'GET /fetchPlanByTrainerId': { action: 'plan/fetch-plan-by-trainer-id', csrf: false },
  'GET /fetchWorkoutByTrainerId': { action: 'workout/fetch-workout-by-trainer-id', csrf: false },
  'POST /saveWorkout': { action: 'user/save-workout', csrf: false },
  'POST /removeSavedWorkout': { action: 'user/remove-saved-workout', csrf: false },
  'POST /checkIfWorkoutSaved': { action: 'user/check-if-workout-saved', csrf: false },
  'POST /startWorkoutPlan': { action: 'user/start-workout-plan', csrf: false },
  'GET /getCurrentWorkoutPlan': { action: 'user/get-current-workout-plan', csrf: false },
  'POST /addMyWorkout': { action: 'user/add-my-workout', csrf: false },
  'POST /deleteMyWorkout': { action: 'user/delete-my-workout', csrf: false },
  'POST /setPlanDayCompleted': { action: 'plan/set-plan-day-completed', csrf: false },
  'POST /addWorkoutToUserData': { action: 'user/add-workout-to-user-data', csrf: false },
  'POST /uploadNewUser': { action: 'user/upload-new-user', csrf: false },
  'GET /searchWorkouts': { action: 'workout/search-workouts', csrf: false },
  'POST /fetchWorkoutsByMusclegroups': { action: 'workout/fetch-workouts-by-musclegroups', csrf: false },
  'POST /filterWorkouts': { action: 'workout/filter-workouts', csrf: false },
  'POST /fetchPlansForYou': { action: 'plan/fetch-plans-for-you', csrf: false },
  'GET /fetchPlanById': { action: 'plan/fetch-plan-by-id', csrf: false },

  'GET /home': { action: 'viewScripts/home', csrf: false },
  'GET /addWorkout': { action: 'viewScripts/add-workout', csrf: false },
  'GET /addWorkoutPlan': { action: 'viewScripts/add-workout-plan', csrf: false },
  'GET /exercises': { action: 'viewScripts/exercises', csrf: false },
  'GET /configureExercise': { action: 'viewScripts/configure-exercise', csrf: false },
  'POST /addWorkoutToDB': { action: 'workout/add-workout', csrf: false },
  'GET /fetchTrainerById': { action: 'trainer/fetch-trainer-by-id', csrf: false },
  'POST /addWorkoutPlanToDB': { action: 'plan/add-plan', csrf: false },
  'GET /configureWeek': { action: 'viewScripts/configure-week', csrf: false },
  'GET /workoutsByTrainer': { action: 'viewScripts/workouts-by-trainer', csrf: false },

  'GET /fetchQuoteById': { action: 'motivational-quote/get-quote-by-id', csrf: false },
  'GET /fetchWhiteList': { action: 'whitelist/fetch-whitelist', csrf: false },
  'POST /stopCurrentPlan': { action: 'user/stop-current-plan', csrf: false },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout', csrf: false },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password', csrf: false },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile', csrf: false },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card', csrf: false },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login', csrf: false },                  //SAILS_LOCALS._csrf
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup', csrf: false },                  
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email', csrf: false },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login', csrf: false },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message', csrf: false },
  'POST /updateExercise':     { action: 'exercise/update-mysql-exercises', csrf: false },

  'GET /csrfToken': { action: 'security/grant-csrf-token', csrf: false }

};
