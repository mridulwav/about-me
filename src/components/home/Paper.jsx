import PaperCrumple from '../PaperCrumple';

function Paper() {
  return (
    <div className="paper">
      <PaperCrumple
        src={`${import.meta.env.BASE_URL}letter.png`}
        alt="A print to crumple"
        width={800}
        height={800}
        sceneHeight={848}
        releaseBehavior="restore"
        crumpleAmount={0.85}
        crumpleDuration={0.55}
        releaseDuration={0.4}
        foldCount={6}
        foldSharpness={0.6}
        wrinkleDepth={0.65}
        creaseStrength={0.18}
        paperColor="#f4f0e8"
        paperTexture={0.08}
        draggable
        returnToOrigin
        imageFit="contain"
        roughness={0.92}
        lightIntensity={1.8}
        lightAngle={-35}
        shadow
        shadowOpacity={0.16}
        dragRotation={10}
        dragRadius={180}
        rotation={0}
        seed={7}
        detail={64}
        disabled={false}
      />
    </div>
  );
}
export default Paper;
