import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-muted">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
<<<<<<< HEAD
                    <div className="relative animate-fade-in hidden md:block">
=======
                    <div className="relative animate-fade-in">
>>>>>>> 52b5a41 (last polsih portfolio)
                        <div className="aspect-square rounded-2xl overflow-hidden border-2 border-border">
                            <Image
                                width={500}
                                height={500}
                                quality={100}
                                src='/images/hero.png'
                                alt="Abdulsalam Shiiqow"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="space-y-2">
                            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                                About Me
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Passionate about
                                <br />
                                <span className="text-muted-foreground">clean design &amp; code</span>
                            </h2>
                        </div>

                        <div className="space-y-4 text-muted-foreground">
                            <p>
<<<<<<< HEAD
                                I&apos;m <b className="text-black">Abdulsalam Hassan</b>  — a passionate Full-Stack Developer and Computer Science student dedicated to building modern, scalable, and user-focused digital experiences. I love turning ideas into real products using technologies like React, Next.js, TypeScript, Node.js, MongoDB and modern UI frameworks.
                            </p>
                            <p>
                                I&apos;m always learning, improving, and pushing my skills forward — from mastering frontend development to exploring backend systems, cloud technologies, and AI engineering. I enjoy solving real problems, building clean interfaces, and creating tools that make life easier for users.
=======
                                I&apos;m a full-stack developer with a passion for creating elegant,
                                user-centric web applications. My journey in web development started
                                with a fascination for how design and functionality merge to create
                                exceptional user experiences.
                            </p>
                            <p>
                                With expertise in modern technologies like React, Next.js, and
                                Tailwind CSS, I specialize in building responsive, performant
                                applications that solve real-world problems. I believe in writing
                                clean, maintainable code and following best practices.
>>>>>>> 52b5a41 (last polsih portfolio)
                            </p>
                        </div>
                        <a href="/Abdulsalam_Hassan_shiikhow.pdf" download>
                            <Button size="lg" className="group">
                                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                                Download CV
                            </Button>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};
