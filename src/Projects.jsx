import ProjectCard from './ProjectCard';
import rhdImg from './images/rhd.png';
//import dysarthriaImg from './images/dysarthria.png';
import tlineImg from './images/tline.png';
import lpSolverImg from './images/lp_solver.png';
import wassersteinImg from './images/wasserstein.png';


export default function Projects() {
  const projects = [
    {
      title: "Right Hemisphere Damage Classification (IEEE i-ETC 2025)",
      description:
        "Developed a preprocessing pipeline using MFCC features to classify prosodic deficits from TalkBank audio. Cross-validated on speaker groups. Achieved 79% accuracy and 0.88 AUC using an RBF SVM.",
      tech: ["MFCC", "SVM", "TalkBank", "scikit-learn"],
      image: rhdImg,
    },
    {
      title: "Dysarthria Severity Classification (In Progress)",
      description:
        "Working on interpretable severity-level classification of dysarthric speech using wav2vec2, MFCC, Whisper. Goal: interpretability and fusion of acoustic embeddings.",
      tech: ["Deep learning", "Whisper", "Wav2Vec2", "MFCC"],
      image: dysarthriaImg,
    },
    {
      title: "Transmission Line Fault Location via Laplace Modeling",
      description:
        "Derived a model using Laplace transforms and Kirchhoff's Laws to estimate fault positions on transmission lines. Report includes original proofs and full derivations.",
      tech: ["Laplace", "Kirchhoff", "signal modeling", "applied math"],
      image: tlineImg ,
    },
    {
      title: "Linear Programming Game Solver",
      description:
        "Implemented a matrix game solver using linear programming. Generalized the solution beyond class scope to handle arbitrary payoff matrices.",
      tech: ["Linear programming", "game theory", "NumPy"],
      image: lpSolverImg,
    },
    {
      title: "Wasserstein Barycenters on MNIST Digits",
      description:
        "Used optimal transport and the POT library to interpolate between MNIST digits and visualize barycenters in the Wasserstein space.",
      tech: ["Optimal transport", "POT", "MNIST", "Python"],
      image: lpSolverImg,
    },
  ];

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#000',
        padding: '4rem 1rem',
        fontFamily: '"IBM Plex Mono", monospace',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem',
            textAlign: 'center',
          }}
        >
          Projects
        </h2>

        {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
        ))}

      </div>
    </section>
  );
}
