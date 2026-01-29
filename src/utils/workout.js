/**
 * Resolves a workout session by combining the data from it's associated template (if any) with it's own data.
 *
 * @param {Object} session - The workout session to resolve
 * @param {Array} templates - The list of available workout templates
 * @returns {Object} A resolved session ready for display
 */
export const resolveWorkoutSession = (session, templates) => {
  const template = templates.find(template => template.id === session.templateId)
  const totals = calculateWorkoutStats(session.exercices)

  return {
    ...(template ?? {}),
    ...session,
    ...totals,
    totalExercices: session.exercices.length,
  }
}

/**
 * Calculates statistics for a workout.
 * Works for both templates (sets as integer) and sessions (sets as array of objects).
 *
 * Aggregates:
 * - totalReps: total performed reps
 * - totalRepsTarget: total targeted reps
 * - totalSets: total number of sets
 * - totalVolume: total weight lifted (reps * weight)
 * - totalDuration: total duration of the workout
 *
 * @param {Array<Object>} exercises - Array of exercises from a template or session
 * @returns {Object} totals - Aggregated statistics for the template or session workout
 */
export const calculateWorkoutStats = (exercices) => {
 return exercices.reduce(
    (acc, exercice) => {
      const setsCount = Array.isArray(exercice.sets) ? exercice.sets.length : exercice.sets
      const repsCount = Array.isArray(exercice.sets) ? exercice.sets.reduce((sum, set) => sum + set.reps, 0) : setsCount * exercice.repsTarget

      acc.totalDuration += (exercice.restTime * setsCount) + (60 * setsCount)
      acc.totalReps += repsCount
      acc.totalRepsTarget += exercice.repsTarget * setsCount
      acc.totalSets += setsCount
      acc.totalVolume += repsCount * exercice.weight
      return acc
    },
    { totalReps: 0, totalRepsTarget: 0, totalSets: 0, totalVolume: 0, totalDuration: 0 }
  )
}