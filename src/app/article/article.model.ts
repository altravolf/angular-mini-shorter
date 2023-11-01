export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = "http://" + link;
        this.votes = votes || 0;

    }

    upVote(): void {
        this.votes += 1;
    }

    downVote(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            if (this.link) {
                const domainAndPath: string = this.link.split("//")[1];
                return domainAndPath.split("/")[0];
            } else {
                return 'Invalid link';
            }
        } catch (err) {
            return `There is an error: ${err}`;
        }
    }


}