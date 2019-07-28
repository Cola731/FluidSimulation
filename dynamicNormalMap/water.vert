#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aTexCoords;

out vec2 TexCoords;
out vec3 Pos;
out mat3 TBN;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    vec3 T = normalize(vec3(model * vec4(1,0,0,0)));
    vec3 N = normalize(vec3(model * vec4(0,0,-1,0)));
	vec3 B=normalize(cross(T,N));
	TBN=mat3(T,B,N);

	Pos=vec3(model * vec4(aPos, 1.0));
    TexCoords = aTexCoords;    
    gl_Position = projection * view * vec4(Pos, 1.0);
}