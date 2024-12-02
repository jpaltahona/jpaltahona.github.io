import Container from "@/components/layout/container";
import Tag from "@/components/tag";
import ProjectCard from "@/components/project-card";

import { ProjectsData } from "@/lib/data";

const Project = () => {
    return (
        <Container id="projects">
            <div className="flex flex-col items-center gap-y-4">
                <Tag label="Projects" />
                <p className="max-w-xl text-center md:text-lg">
                    Here are some of the projects that I have worked on.
                </p>
            </div>

            <ProjectCard projects={ProjectsData} />
        </Container>
    );
};

export default Project;
