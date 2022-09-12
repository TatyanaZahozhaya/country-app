import { CountryAddForm } from './country_add_form';
import { CountrySearchForm } from './country_search_form';
import { CountriesList } from './countries_list';

export const Home = () => {
    return (
        <div>
            <CountryAddForm />
            <CountrySearchForm />
            <CountriesList />
        </div>
    );
};
