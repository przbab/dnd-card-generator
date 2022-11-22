import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { debounce } from 'throttle-debounce';
import { linkToSearch } from '../../helpers/links';
import { getQueryParam } from '../../helpers/routing';
import styles from './SearchPanel.module.scss';

export function SearchPanel() {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>();
    const searchQuery = getQueryParam(router.query.query);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (formRef.current) {
                const formData = new FormData(formRef.current);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const searchParams = new URLSearchParams(formData as any);

                router.replace(`${linkToSearch()}?${searchParams.toString()}`, undefined, { shallow: true });
            }
        },
        [router]
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChange = useCallback(debounce(500, handleSubmit), [handleSubmit]);

    useEffect(() => {
        if (router.isReady && searchQuery && formRef.current?.querySelector('input[type="search"]')) {
            (formRef.current.querySelector('input[type="search"]') as HTMLInputElement).value = searchQuery;
        }
        // ignore searchQuery change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.isReady]);

    useLayoutEffect(() => {
        const ref = formRef.current;
        ref.addEventListener('change', handleChange);

        return () => {
            ref.removeEventListener('change', handleChange);
        };
    }, [handleChange]);

    return (
        <form action="/generator/search" onSubmit={handleSubmit} ref={formRef}>
            <input name="query" onKeyUp={handleChange} type="search" />
            <input type="reset" />
            <h2>Search Filters</h2>
            <label htmlFor="rememberFilters">
                <input id="rememberFilters" name="rememberFilters" type="checkbox" />
                Remember my filters
            </label>
            <select name="types">
                <option disabled hidden selected value="">
                    Type
                </option>
                <option aria-label="type" value="0">
                    Any
                </option>
                <option aria-label="type" value="1">
                    placeHolder
                </option>
            </select>
            <select name="sources">
                <option disabled hidden selected value="">
                    Source
                </option>
                <option aria-label="source" value="0">
                    Any
                </option>
                <option aria-label="source" value="1">
                    placeHolder
                </option>
            </select>
            <select name="schools">
                <option disabled hidden selected value="">
                    School
                </option>
                <option aria-label="school" value="0">
                    Any
                </option>
                <option aria-label="school" value="1">
                    placeHolder
                </option>
            </select>
            <select name="classes">
                <option disabled hidden selected value="">
                    Class
                </option>
                <option aria-label="class" value="0">
                    Any
                </option>
                <option aria-label="class" value="1">
                    placeHolder
                </option>
            </select>
            <h2>Level</h2>
            <input className={styles.input} list="levels" max="9" min="0" name="level" type="range" />
            <datalist className={styles.datalist} id="levels">
                <option className={styles.option} label="C" value="0" />
                <option className={styles.option} label="1" value="1" />
                <option className={styles.option} label="2" value="2" />
                <option className={styles.option} label="3" value="3" />
                <option className={styles.option} label="4" value="4" />
                <option className={styles.option} label="5" value="5" />
                <option className={styles.option} label="6" value="6" />
                <option className={styles.option} label="7" value="7" />
                <option className={styles.option} label="8" value="8" />
                <option className={styles.option} label="9" value="9" />
            </datalist>
        </form>
    );
}
