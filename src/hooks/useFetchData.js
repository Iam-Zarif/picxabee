"use client"
import useSWR from 'swr'

const useFetchData = (api) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(api, fetcher , {refreshInterval:1000})

    return {data, error, isLoading}
}

export default useFetchData