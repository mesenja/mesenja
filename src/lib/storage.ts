import SecureLS from 'secure-ls'

class Storage {
  prefix = '@mesenja:'
  store = new SecureLS()

  get(key: string) {
    return this.store.get(this.prefix + key)
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
