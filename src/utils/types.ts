export type CreateUserParams={

    name:string

    email:string

    phone:number

    password:string
}

export type UserLoginParam={
    email:string

    password:string
}


export type CreateAdminParams={

    name:string

    email:string

    phone:number

    password:string

    role:[]
}

export type CreateCatParam={
    name:string

    description:string
}

export type AdminLoginParam={
    email:string

    password:string
}