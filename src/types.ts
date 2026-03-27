export interface ModuleDoc {
  moduleLocation: string;
  overview?: string;
  classes: ClassDoc[];
}

export interface ClassDoc {
  name: string;
  methods: MethodDoc[];
}

export interface MethodDoc {
  name: string;
  description?: string;
  signature: string;
  params: ParamDoc[];
  returnType: string;
  returnDescription?: string;
}

export interface ParamDoc {
  name: string;
  type: string;
  description?: string;
}