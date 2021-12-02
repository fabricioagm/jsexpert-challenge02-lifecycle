class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    rawObject = {
      ...rawObject.__proto__,
      toString() {
        return JSON.stringify(this)
      },
      valueOf() {
        return this.age
      }
    }
    return rawObject;
  }

  getEnhancedObject2(rawObject) {
    rawObject = {
      ...rawObject.__proto__,
      toString() {
        return `[name="${this.name}",age=${this.age}]`
      },
      valueOf() {
        return this.age
      },
      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name="${this.name}",age=${this.age}]`,
          number: this.age
        }
        return types[coercionType] || types.string
      }
    }
    return rawObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    rawObject = {
      ...rawObject.__proto__,
      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name="${this.name}",age=${this.age}]`,
          number: this.age
        }
        return types[coercionType] || types.string
      }
    }
    return rawObject;
  }
}

module.exports = ObjectMethodsService;
