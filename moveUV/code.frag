#version 330 core
out vec4 FragColor;

in vec3 WorldPos;
in vec2 TexCoords;

uniform sampler2D suqareTex;
uniform float time;
void main()
{
	vec2 texCoords=vec2(0);
	float dis=(sqrt((TexCoords.x-0.5)*(TexCoords.x-0.5)+(TexCoords.y-0.5)*(TexCoords.y-0.5)));
	texCoords.x=TexCoords.x+0.01*sin(dis*3.141592653589793284*20+time*2);
	texCoords.y=TexCoords.y+0.01*sin(dis*3.141592653589793284*20+time*2);
	vec3 color=texture(suqareTex,texCoords).xyz;
	FragColor=vec4(color,1.0);
}