import { REFRESH_BALANCE_EVENT } from "@/constants/CommonConstants";
import { REFRESH_PROFILE_EVENT } from "@/constants/CommonConstants";
import EventEmitter from "eventemitter3";
import { signOut } from "next-auth/react";

const eventEmitter = new EventEmitter();

export const refetchBalance = () => {
  eventEmitter.emit(REFRESH_BALANCE_EVENT);
};

export const refetchProfile = () => {
  eventEmitter.emit(REFRESH_PROFILE_EVENT);
};

export const logoutUser = () =>
  signOut({ callbackUrl: "/auth/signin", redirect: true });

export default eventEmitter;
