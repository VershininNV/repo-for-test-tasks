export interface FamilyModel {
  family: ParentModel[]
}

export interface ParentModel {
  firstName: string
  secondName: string
  middleName: string
  children: ChildModel[]
}

export interface ChildModel {
  firstName: string
  secondName: string
  middleName: string
  toys: Toys[]
}

export interface Toys {
  type: string
  color: string
  size: string
}
