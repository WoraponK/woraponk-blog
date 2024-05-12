export type TGithubRepos = {
    id: number
    name: string
    html_url: string
    language: string
    watchers_count: number
    forks_count: number
    stargazers_count: number
}

export type TReccomendedProject = {
    id: string
    title: string
    description: string
    tools: string[]
    background_image: string
    href: string
}