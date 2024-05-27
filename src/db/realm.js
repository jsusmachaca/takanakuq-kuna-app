import Realm from "realm";

export const MedicineSchema = {
  name: 'Medicine',
  properties: {
    medicine_id: 'int',
    medicine_name: 'string',
    amount: 'int',
    hours: 'int',
    days: 'int',
  },
}

export const UserSchema = {
  name: 'User',
  properties: {
    id: 'int',
    username: 'string',
    jwt: 'string',
    medicines: 'Medicine[]',
  },
  primaryKey: 'id',
}

export const realm = new Realm({ schema: [UserSchema, MedicineSchema] })