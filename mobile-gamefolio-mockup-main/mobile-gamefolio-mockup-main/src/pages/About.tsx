import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Briefcase, GraduationCap, Heart, Code, Gamepad2, Palette, Music } from "lucide-react";
import profilePlaceholder from "/public/headshot.jpg";

const skills = [
    { category: "Design", items: ["Level Design", "Game Systems", "UI/UX", "Narrative Design"] },
    { category: "Tools", items: ["Unity", "Unreal Engine", "Figma", "Photoshop"] },
    { category: "Programming", items: ["C#", "C++", "Blueprint", "Python"] },
];

const experience = [
    { year: "2023 - Present", role: "Senior Game Designer", company: "Studio Name", description: "Leading design on AAA title" },
    { year: "2021 - 2023", role: "Game Designer", company: "Indie Studio", description: "Designed gameplay systems and levels" },
    { year: "2019 - 2021", role: "Junior Designer", company: "Game Company", description: "Assisted with level design and QA" },
];

const education = [
    { year: "2019", degree: "Bachelor's in Game Design", institution: "University Name" },
    { year: "2017", degree: "Certificate in 3D Modeling", institution: "Art Institute" },
];

const interests = [
    { icon: Gamepad2, label: "Gaming" },
    { icon: Palette, label: "Digital Art" },
    { icon: Music, label: "Music Production" },
    { icon: Code, label: "Coding" },
];

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
                <div className="space-y-12 animate-in fade-in-50 duration-700">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-light">About Me</h1>
                        <p className="text-muted-foreground">
                            Game designer passionate about creating immersive experiences
                        </p>
                    </div>

                    {/* Bio Section */}
                    <div className="grid md:grid-cols-2 gap-18 items-start">
                        {/* Photo */}
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden border border-border">
                            <img
                                src={profilePlaceholder}
                                alt="Profile photo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bio Text & Resume */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-light">Bio</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    I'm a game designer with experience in creating engaging gameplay systems,
                                    level design, and player experiences. With a background in both indie and
                                    AAA development, I bring a unique perspective to every project.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    My passion lies in crafting memorable moments that resonate with players
                                    and push the boundaries of interactive entertainment.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    When I'm not designing games, you can find me exploring new technologies,
                                    playing the latest releases, or collaborating with other creatives on
                                    experimental projects.
                                </p>
                            </div>

                            {/* Resume Download */}
                            <Button variant="outline" className="gap-2" asChild>
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <FileText className="h-4 w-4" />
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-light flex items-center gap-2">
                            <Code className="h-5 w-5 text-primary" />
                            Skills
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {skills.map((skillGroup) => (
                                <Card key={skillGroup.category} className="bg-card/50 border-border">
                                    <CardContent className="pt-6">
                                        <h3 className="font-medium text-foreground mb-3">{skillGroup.category}</h3>
                                        <ul className="space-y-2">
                                            {skillGroup.items.map((skill) => (
                                                <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Experience Timeline */}
                    {/* Experience & Education Side by Side */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Experience Timeline */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-light flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                                Experience
                            </h2>
                            <div className="space-y-6">
                                {experience.map((exp, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-border">
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                                        <div className="space-y-1">
                                            <span className="text-sm text-primary font-medium">{exp.year}</span>
                                            <h3 className="font-medium text-foreground">{exp.role}</h3>
                                            <p className="text-muted-foreground text-sm">{exp.company}</p>
                                            <p className="text-muted-foreground text-sm">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-light flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-primary" />
                                Education
                            </h2>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <Card key={index} className="bg-card/50 border-border">
                                        <CardContent className="pt-6">
                                            <span className="text-sm text-primary font-medium">{edu.year}</span>
                                            <h3 className="font-medium text-foreground mt-1">{edu.degree}</h3>
                                            <p className="text-muted-foreground text-sm">{edu.institution}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Things I Like */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-light flex items-center gap-2">
                            <Heart className="h-5 w-5 text-primary" />
                            Things I Like
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {interests.map((interest, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 hover:border-primary transition-colors"
                                >
                                    <interest.icon className="h-4 w-4 text-primary" />
                                    <span className="text-foreground text-sm">{interest.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default About;