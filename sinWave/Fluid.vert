#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;

out vec3 Pos;
out vec3 Normal;

uniform mat4 projection;
uniform mat4 view;
uniform mat4 model;

void main()
{
	Normal=transpose(inverse(mat3(model)))*aNormal;
	Pos=vec3(model*vec4(aPos,1.0));
    gl_Position = projection * view*vec4(Pos,1.0);
}