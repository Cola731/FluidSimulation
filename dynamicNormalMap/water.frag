#version 330 core
out vec4 FragColor;

in vec2 TexCoords;
in vec3 Pos;
in mat3 TBN;

uniform vec3 cameraPos;
uniform samplerCube wallBox;
uniform sampler2D normalMap;

uniform float time;
void main()
{   
	float xSpeed=0.06,ySpeed=0.08;
	float sca=1.2;
	vec2 texCoords=vec2(TexCoords.x*sca+xSpeed*time,TexCoords.y*sca+ySpeed*time);
	vec3 Normal=texture(normalMap,texCoords).xyz;
	Normal=normalize(Normal*2.0-1.0);
	Normal=normalize(TBN*Normal);

	vec3 inDir = normalize(Pos - cameraPos);
	float fresnel=pow(1.0-max(dot(-inDir,Normal),0.0),4.0);

    vec3 reflectDir = reflect(inDir, Normal);
	vec3 reflectColor=texture(wallBox,reflectDir).rgb;
	
	float ratio = 1/1.1;
	vec3 refractDir = refract(inDir, Normal, ratio);
	vec3 refractColor=texture(wallBox,refractDir).rgb;

	vec3 resultColor=reflectColor*fresnel+refractColor*(1-fresnel);
	FragColor = vec4(resultColor,1.0);
}