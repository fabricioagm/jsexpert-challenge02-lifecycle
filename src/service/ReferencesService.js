class ReferencesService {
  getCounterCopyingReferences(object) {
    const newObj = object
    return newObj;
  }

  getCounterWithoutCopyingReferences(object) {
    const newObj = {
      ...object
    }
    return newObj;
  }
  
  // @TIP: if you want to do the extra sub-challenge, uncomment and implement the following function:
  getCounterWithoutDeepCopyingReferences(object) {
    const newObj = JSON.parse(JSON.stringify(object))
    return newObj;
  }
  
}

module.exports = ReferencesService;
