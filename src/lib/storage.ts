import SecureLS from 'secure-ls'

class Storage {
  prefix = '@mesenja:'
  store = new SecureLS()

  get(key: string, fallback: string | boolean | object) {
    const value = this.store.get(this.prefix + key)

    if (value) {
      return value
    }

    return fallback
  }

  set(key: string, value: string | boolean | object) {
    this.store.set(this.prefix + key, value)
  }

  remove(key: string) {
    this.store.remove(this.prefix + key)
  }

  clear() {
    this.store.clear()
  }
}

export const storage = new Storage()
