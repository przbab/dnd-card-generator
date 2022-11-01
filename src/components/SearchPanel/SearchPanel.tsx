import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { debounce } from 'throttle-debounce';
import { linkToSearch } from '../../helpers/links';
import { getQueryParam } from '../../helpers/routing';

export function SearchPanel() {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>();
    const searchQuery = getQueryParam(router.query.query);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (formRef.current) {
                const formData = new FormData(formRef.current);
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
        </form>
    );
}
