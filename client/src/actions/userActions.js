export const saveJob = (job) => {
  return ({
    type: "SAVE_JOB",
    payload: job
  })
}

export const deleteJob = id => {
  return ({
    type: "DELETE_JOB",
    payload: id
  })
}