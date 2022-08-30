export type state = {
    fullname: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    country: string;
    bvn: string;
};

interface updateAction {
    type: 'UPDATE_USER';
    payload: object;
}
interface clearAction {
    type: 'CLEAR_USER';
}

export type action = updateAction | clearAction;
