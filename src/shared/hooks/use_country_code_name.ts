import { Utils } from '@shared';

export const useCountryName = (id: string): string => {
    return Utils.getName(id);
};

export const useCountryCode = (id: string): string => {
    return Utils.getCode(id);
};
